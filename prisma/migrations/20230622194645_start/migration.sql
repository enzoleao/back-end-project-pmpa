/*
  Warnings:

  - Added the required column `vacancies` to the `Battalions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Battalions" ADD COLUMN     "vacancies" INTEGER NOT NULL;
