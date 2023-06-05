/*
  Warnings:

  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_userSchedule_fkey";

-- DropTable
DROP TABLE "Schedule";

-- CreateTable
CREATE TABLE "Scheduled" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userSchedule" TEXT NOT NULL,

    CONSTRAINT "Scheduled_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedules" (
    "id" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scheduled_userSchedule_key" ON "Scheduled"("userSchedule");

-- AddForeignKey
ALTER TABLE "Scheduled" ADD CONSTRAINT "Scheduled_userSchedule_fkey" FOREIGN KEY ("userSchedule") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
