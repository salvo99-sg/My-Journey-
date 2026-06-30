/*======================================================================
PRODUCT.......: My Journey
DOCUMENT......: CONTRIBUTING.md
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================

# MY JOURNEY

# CONTRIBUTING

---

# Purpose

This document defines the mandatory development rules for every contributor.

All contributors must follow these standards.

No exceptions.

---

# Core Principles

- Write clean code.
- Prefer readability over cleverness.
- Keep modules independent.
- Respect the architecture.
- Never introduce technical debt intentionally.

---

# Repository Workflow

Main branches

```
main
develop
feature/*
hotfix/*
release/*
```

Never develop directly on **main**.

Every feature must be developed in its own branch.

---

# Commits

Use descriptive commit messages.

Examples

```
feat: add journey timeline

fix: correct budget calculation

refactor: simplify storage module

style: improve button spacing

docs: update architecture guide
```

---

# Pull Requests

Every Pull Request must:

- compile successfully
- pass all tests
- avoid merge conflicts
- include a clear description
- keep changes focused on one feature

---

# Code Style

JavaScript

- ES2022+
- const by default
- let only when required
- avoid var
- strict mode enabled

CSS

- BEM methodology
- Design Tokens only
- Mobile First

HTML

- Semantic elements
- Accessible markup
- Valid HTML5

---

# Forbidden

Never:

- modify production data manually
- hardcode colors
- hardcode typography
- duplicate existing logic
- create circular dependencies
- disable accessibility
- remove comments defining file headers
- commit secrets, API keys or credentials

---

# File Structure

Each file has one responsibility.

Large modules must be split into smaller modules.

Avoid files exceeding practical maintainability limits.

---

# Documentation

Every new module must include:

- file header
- purpose
- public API
- version
- compatibility

Documentation must be updated together with code changes.

---

# Testing

Before opening a Pull Request verify:

- application starts correctly
- routing works
- storage persists correctly
- offline mode functions
- responsive layout is preserved
- console contains no errors

---

# Performance

Always:

- minimize DOM operations
- reuse existing components
- lazy load heavy resources
- optimize images
- avoid unnecessary reflows

---

# Accessibility

Every new feature must support:

- keyboard navigation
- focus visibility
- screen readers
- reduced motion
- WCAG AA compliance

---

# Review Checklist

Before merging, confirm:

- Architecture respected
- Naming conventions respected
- Design System respected
- No duplicated code
- Responsive behavior verified
- Accessibility verified
- Performance impact acceptable
- Documentation updated

---

# Ownership

Project

**My Journey**

Original concept, product vision and functional architecture maintained by the project owners.

All external contributions must preserve the established architecture, coding standards and design philosophy.

======================================================================

END OF FILE
*/
