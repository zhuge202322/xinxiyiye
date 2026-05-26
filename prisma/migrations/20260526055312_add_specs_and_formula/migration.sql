-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nameFr" TEXT NOT NULL DEFAULT '',
    "nameEs" TEXT NOT NULL DEFAULT '',
    "nameAr" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL DEFAULT '',
    "shortDescriptionFr" TEXT NOT NULL DEFAULT '',
    "shortDescriptionEs" TEXT NOT NULL DEFAULT '',
    "shortDescriptionAr" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "descriptionFr" TEXT NOT NULL DEFAULT '',
    "descriptionEs" TEXT NOT NULL DEFAULT '',
    "descriptionAr" TEXT NOT NULL DEFAULT '',
    "specs" TEXT NOT NULL DEFAULT '',
    "specsFr" TEXT NOT NULL DEFAULT '',
    "specsEs" TEXT NOT NULL DEFAULT '',
    "specsAr" TEXT NOT NULL DEFAULT '',
    "formula" TEXT NOT NULL DEFAULT '',
    "formulaFr" TEXT NOT NULL DEFAULT '',
    "formulaEs" TEXT NOT NULL DEFAULT '',
    "formulaAr" TEXT NOT NULL DEFAULT '',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("createdAt", "description", "descriptionAr", "descriptionEs", "descriptionFr", "featured", "id", "name", "nameAr", "nameEs", "nameFr", "shortDescription", "shortDescriptionAr", "shortDescriptionEs", "shortDescriptionFr", "slug", "sortOrder", "updatedAt") SELECT "createdAt", "description", "descriptionAr", "descriptionEs", "descriptionFr", "featured", "id", "name", "nameAr", "nameEs", "nameFr", "shortDescription", "shortDescriptionAr", "shortDescriptionEs", "shortDescriptionFr", "slug", "sortOrder", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
