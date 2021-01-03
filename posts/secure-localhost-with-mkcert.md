---
title: Using mkcert for secure localhost development on WSL 2
description: How to setup mkcert on WSL 2 for secure localhost development
date: 2021-01-05
tags: [development, notes]
layout: layouts/post.njk
---

For upcoming features I need to use HTTPS for local development and I came across [mkcert](https://github.com/FiloSottile/mkcert) which is a tool to create locally trusted certificates. However, I do most of my development through WSL and so I thought I'd be out of luck with using `mkcert`.

I then came across a [useful description in a Github Issues thread](https://github.com/Microsoft/WSL/issues/3161#issuecomment-451863149) for this exact scenario.

Following [alanaasmaa's](https://github.com/alanaasmaa) steps:

1. Install `mkcert` on Windows - I used [Chocolatey](https://chocolatey.org/) for this
2. Ran `mkcert -install`
3. Install `mkcert` on Ubuntu WSL - for fun I decided to clone the repository and build it from source using [Go](https://golang.org/)
4. Run `mkcert -install` on Ubuntu
5. Back in a Windows PowerShell terminal I ran `mkcert -CAROOT` to find out where the certificates were created on Windows. I copied these.
6. On Ubuntu run `mkcert -CAROOT` and then `explorer.exe` to open File Explorer on Windows at the Ubuntu directory.
7. Paste the certificates from step 5
8. Run `mkcert -CAROOT` again on Ubuntu (I'm not sure if this step is neccessary but it works!)
9. Create certificates on WSL e.g. `mkcert example.com "*.example.com" localhost`
10. Configure nginx or Apache to use the generated certificates

The reason for installing mkcert on both Windows and Ubuntu is so that the browsers on Windows trust the certificates supplied by the nginx server on Ubuntu.

The final step I had to do was edit the `hosts` file on Windows at `C:\Windows\System32\drivers\etc\hosts` with Notepad in Administrator mode.

I can now view `https://bowie.test` locally.
