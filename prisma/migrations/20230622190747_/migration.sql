/*
  Warnings:

  - The primary key for the `Battalions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Battalions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Coint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Coint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Polices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Polices` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `coint_id` on the `Battalions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `battalion_id` on the `Polices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Battalions" DROP CONSTRAINT "Battalions_coint_id_fkey";

-- DropForeignKey
ALTER TABLE "Polices" DROP CONSTRAINT "Polices_battalion_id_fkey";

-- AlterTable
ALTER TABLE "Battalions" DROP CONSTRAINT "Battalions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "coint_id",
ADD COLUMN     "coint_id" INTEGER NOT NULL,
ADD CONSTRAINT "Battalions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Coint" DROP CONSTRAINT "Coint_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Coint_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Polices" DROP CONSTRAINT "Polices_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "battalion_id",
ADD COLUMN     "battalion_id" INTEGER NOT NULL,
ADD CONSTRAINT "Polices_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Battalions_coint_id_key" ON "Battalions"("coint_id");

-- CreateIndex
CREATE UNIQUE INDEX "Polices_battalion_id_key" ON "Polices"("battalion_id");

-- AddForeignKey
ALTER TABLE "Polices" ADD CONSTRAINT "Polices_battalion_id_fkey" FOREIGN KEY ("battalion_id") REFERENCES "Battalions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Battalions" ADD CONSTRAINT "Battalions_coint_id_fkey" FOREIGN KEY ("coint_id") REFERENCES "Coint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
