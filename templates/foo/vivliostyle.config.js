// @ts-check
import { defineConfig } from '@vivliostyle/cli';

export default defineConfig({
  title: "My Book Title",
  author: "John Doe",
  language: "en-US",
  image: "ghcr.io/vivliostyle/cli:9.7.2",
  entry: [
    "foo.md",
    "baa.md"
  ],
});
