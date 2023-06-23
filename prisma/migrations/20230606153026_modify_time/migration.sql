/*
  Warnings:

  - Changed the type of `time` on the `Schedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Schedules" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
