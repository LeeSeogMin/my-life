import fs from "fs";
import path from "path";

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  publishDate: string;
  url: string;
  description: string;
  tableOfContents: string;
}

export interface Publication {
  id: string;
  title: string;
  author: string;
  journal: string;
  volume_issue: string;
  year: string;
  filename: string;
  description: string;
  abstract: string;
}

export type ArchiveItem =
  | (Book & { type: "book" })
  | (Publication & { type: "publication" });

export function getAllBooks(): Book[] {
  const booksPath = path.join(process.cwd(), "data", "books.json");
  if (!fs.existsSync(booksPath)) return [];
  try {
    return JSON.parse(fs.readFileSync(booksPath, "utf-8"));
  } catch {
    return [];
  }
}

export function getAllPublications(): Publication[] {
  const pubsPath = path.join(process.cwd(), "data", "publications.json");
  if (!fs.existsSync(pubsPath)) return [];
  try {
    return JSON.parse(fs.readFileSync(pubsPath, "utf-8"));
  } catch {
    return [];
  }
}

export function getAllArchiveItems(): ArchiveItem[] {
  const books = getAllBooks().map((b) => ({ ...b, type: "book" as const }));
  const pubs = getAllPublications().map((p) => ({
    ...p,
    type: "publication" as const,
  }));
  return [...books, ...pubs];
}

export function getArchiveItemById(id: string): ArchiveItem | null {
  return getAllArchiveItems().find((item) => item.id === id) ?? null;
}
