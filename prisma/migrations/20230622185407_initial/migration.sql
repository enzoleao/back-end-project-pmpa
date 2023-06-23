/*
  Warnings:

  - You are about to drop the `Scheduled` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedules` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Scheduled" DROP CONSTRAINT "Scheduled_userSchedule_fkey";

-- DropTable
DROP TABLE "Scheduled";

-- DropTable
DROP TABLE "Schedules";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Polices" (
    "id" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "name" TEXT,
    "battalion_id" TEXT NOT NULL,

    CONSTRAINT "Polices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coint" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Coint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Battalions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coint_id" TEXT NOT NULL,

    CONSTRAINT "Battalions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Polices_rg_key" ON "Polices"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Polices_battalion_id_key" ON "Polices"("battalion_id");

-- CreateIndex
CREATE UNIQUE INDEX "Battalions_coint_id_key" ON "Battalions"("coint_id");

-- AddForeignKey
ALTER TABLE "Polices" ADD CONSTRAINT "Polices_battalion_id_fkey" FOREIGN KEY ("battalion_id") REFERENCES "Battalions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Battalions" ADD CONSTRAINT "Battalions_coint_id_fkey" FOREIGN KEY ("coint_id") REFERENCES "Coint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
