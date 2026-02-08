/*
  Warnings:

  - You are about to drop the column `editoral` on the `Problem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "editoral",
ADD COLUMN     "editorial" TEXT;
