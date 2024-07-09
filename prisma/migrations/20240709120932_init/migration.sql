/*
  Warnings:

  - A unique constraint covering the columns `[phonenumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonenumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phonenumber" TEXT NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_phonenumber_key" ON "User"("phonenumber");
