# Adding a news post — guide for the Press Secretary

The news section is just a folder of files. Each post is one text file with
some details at the top and the story underneath, plus any photos sitting in
the same folder. You can do everything in your web browser on GitHub —
nothing to install, nothing to break.

A new post appears on the site automatically a few minutes after you save it.

## The 30-second version

1. Go to the website's folder on GitHub and open `src/content/news/`.
2. Click **Add file → Create new file**.
3. Name the file with the date and a short title, e.g.
   `2026-09-21-juniors-win-at-bedford.md`
4. Paste in the template below, fill in the details, write your story.
5. Click **Commit changes…** then **Commit changes** again. Done — the site
   rebuilds itself in about two minutes.

## The template

Copy this into the new file and edit it:

```markdown
---
title: 'The headline of your story'
description: 'One sentence that sums it up (shown in previews and Google).'
pubDate: 2026-09-21
image: ./my-photo.jpg
imageAlt: 'A short description of the photo'
---

Write your story here, in plain text.

Use a blank line between paragraphs.

## A sub-heading works like this

- And bullet points
- work like this

Put [link text in square brackets](https://example.com) for links.
```

The part between the `---` lines is called the *front matter*. Keep the
quotes around the title and description, write the date as `YYYY-MM-DD`, and
note the `image:` line starts with `./` — that means "the photo file sitting
next to this post". The `image:` and `imageAlt:` lines are optional — delete
them both if the story has no photo.

## Adding pictures

Photos live **in the same folder as the post** (`src/content/news/`):

1. Open `src/content/news/` on GitHub.
2. Click **Add file → Upload files** and drop your photo in.
3. In your post, refer to it as `./the-file-name.jpg` (matching the file
   name exactly, including capital letters).

Tips:

- **JPG or PNG.** The site automatically converts photos to fast-loading
  formats and sizes for phones and desktops, so **don't pre-shrink them** —
  a normal phone photo (1–4 MB) is perfect source material. (GitHub's web
  upload limit is 25 MB per file; anything under that is fine.)
- Use lowercase file names with hyphens, e.g. `j14-crew-bedford-2026.jpg`.
- **No full names of people in file names or alt text** (club photo policy —
  see `docs/photos.md`). Describe the scene instead: "WJ16 quad celebrating
  at the finish".
- Always add an `imageAlt` describing the photo for screen readers.

## Saving without publishing (drafts)

Not ready yet? Add one line to the front matter:

```markdown
draft: true
```

Drafts are hidden from the live site. Remove the line (or set it to
`false`) and commit again to publish.

## Fixing a typo later

Open the file in `src/content/news/`, click the pencil icon (**Edit this
file**), make the change, and **Commit changes**. Easy.

## If something looks wrong

The build will fail safely (the live site keeps the previous version) if the
front matter is malformed — usually a missing quote, a date not written as
`YYYY-MM-DD`, or an `image:` file name that doesn't exactly match an uploaded
photo. Compare your file against the template above, or ask whoever looks
after the site to check the build log.
