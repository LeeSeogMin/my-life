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

export interface Conference {
  id: string;
  title: string;
  author: string;
  conference: string;
  date: string;
  location: string;
  description: string;
  filename: string;
}

export type ArchiveItem =
  | (Book & { type: "book" })
  | (Publication & { type: "publication" })
  | (Conference & { type: "conference" });

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

export function getAllConferences(): Conference[] {
  const confPath = path.join(process.cwd(), "data", "conferences.json");
  if (!fs.existsSync(confPath)) return [];
  try {
    return JSON.parse(fs.readFileSync(confPath, "utf-8"));
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
  const confs = getAllConferences().map((c) => ({
    ...c,
    type: "conference" as const,
  }));
  return [...books, ...pubs, ...confs];
}

export function getArchiveItemById(id: string): ArchiveItem | null {
  return getAllArchiveItems().find((item) => item.id === id) ?? null;
}
