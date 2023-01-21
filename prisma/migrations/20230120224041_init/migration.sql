-- CreateTable
CREATE TABLE "Response" (
    "response_id" INTEGER NOT NULL,
    "survey_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "verified" TEXT NOT NULL,
    "valid" BOOLEAN NOT NULL,
    "paid" BOOLEAN NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("survey_id","user_id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "survey_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "show_to_users" TEXT[],
    "closed" BOOLEAN NOT NULL,
    "budget" DOUBLE PRECISION NOT NULL,
    "cpr" DOUBLE PRECISION NOT NULL,
    "verified_res" TEXT[],

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("survey_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "money" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "survey_id" TEXT NOT NULL,
    "reponded" INTEGER NOT NULL,
    "verified" INTEGER NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("survey_id","authorId")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
