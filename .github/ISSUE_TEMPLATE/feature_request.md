---
name: Feature request
about: Unterstütze das Projekt mit deiner Idee
title: ''
labels: enhancement
---

**Story**
Als ein User
möchte ich dass [ziel],
damit man [nutzen der Idee].

**Typ**
Handelt es sich um eine neue Idee oder eine Änderung?:
Änderungsvorschlag

**Zusätzliche Beschreibung**
[...]

body:
- type: checkboxes
  id: cat-preferences
  attributes:
    label: What kinds of cats do you like?
    description: You may select more than one.
    options:
      - label: Orange cat (required. Everyone likes orange cats.)
        required: true
      - label: **Black cat**
