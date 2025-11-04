// @ts-check
import { defineConfig } from '@vivliostyle/cli';

export default defineConfig({
  title: "{{proper title}}",
  author: "{{author}}",
  {{#if language}}
  language: "{{language}}",
  {{/if}}
  {{#if size}}
  size: "{{size}}",
  {{/if}}
  {{#if theme}}
  theme: {{json theme}},
  {{/if}}
  image: "${CONTAINER_URL}:{{cliVersion}}",
  entry: [
    "foo.md",
    "baa.md"
  ],
});
