/*
  Warnings:

  - The primary key for the `Answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Response` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `response_id` on the `Response` table. All the data in the column will be lost.
  - The `verified` column on the `Response` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `cpr` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `survey_id` on the `Answer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `survey_id` on the `Response` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_pkey",
ADD COLUMN     "cpr" DOUBLE PRECISION NOT NULL,
DROP COLUMN "survey_id",
ADD COLUMN     "survey_id" INTEGER NOT NULL,
ALTER COLUMN "reponded" SET DEFAULT 0,
ALTER COLUMN "verified" SET DEFAULT 0,
ALTER COLUMN "paid" SET DEFAULT false,
ADD CONSTRAINT "Answer_pkey" PRIMARY KEY ("survey_id", "authorId");

-- AlterTable
ALTER TABLE "Response" DROP CONSTRAINT "Response_pkey",
DROP COLUMN "response_id",
DROP COLUMN "survey_id",
ADD COLUMN     "survey_id" INTEGER NOT NULL,
DROP COLUMN "verified",
ADD COLUMN     "verified" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ALTER COLUMN "valid" SET DEFAULT false,
ALTER COLUMN "paid" SET DEFAULT false,
ADD CONSTRAINT "Response_pkey" PRIMARY KEY ("survey_id", "user_id");
