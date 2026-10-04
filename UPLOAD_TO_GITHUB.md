# Как выгрузить сайт на GitHub Pages

Эта версия уже подготовлена под GitHub Pages. Имя репозитория заранее прописывать не нужно: workflow получает правильный `base_path` от GitHub Pages во время сборки.

## 1. Загрузите файлы в репозиторий

В корне репозитория должны лежать `README.md`, папки `frontend`, `.github`, `backend` и остальные файлы проекта. Не загружайте ZIP как один файл — сначала распакуйте его.

## 2. Включите GitHub Pages

Откройте:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

## 3. Запустите публикацию

Push в `main` или `master` автоматически запускает workflow:

`Deploy Next.js site to GitHub Pages`

Он выполняет:

- `npm ci`;
- `npm run typecheck`;
- `npm run build`;
- загрузку `frontend/out`;
- публикацию через официальный GitHub Pages deploy action.

Если typecheck или build не проходят, публикация не выполняется.

## 4. Откройте сайт

После зелёного workflow ссылка появится в **Settings → Pages** и в самом deployment. Для обычного project repository адрес обычно имеет вид:

`https://USERNAME.github.io/REPOSITORY/`

## Важно

- `frontend/next.config.mjs` уже настроен на `output: "export"`;
- `next/image` работает без серверного оптимизатора (`unoptimized: true`);
- внутренние ссылки и публичные изображения учитывают GitHub Pages `basePath`;
- включён `trailingSlash`, чтобы вложенные страницы нормально обслуживались как каталоги;
- `frontend/public/.nojekyll` сохранён для статической публикации.

Локальный запуск остаётся обычным:

```bash
cd frontend
npm install
npm run dev
```
