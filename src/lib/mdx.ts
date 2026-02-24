import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'writing');

export interface PostMeta {
    title: string;
    date: string;
    description: string;
    slug: string;
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(contentDirectory)) return [];

    const fileNames = fs.readdirSync(contentDirectory);

    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                date: data.date || '1970-01-01',
                description: data.description || '',
            };
        });

    return allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        meta: {
            slug,
            title: data.title || slug,
            date: data.date || '1970-01-01',
            description: data.description || '',
        },
        content,
    };
}
