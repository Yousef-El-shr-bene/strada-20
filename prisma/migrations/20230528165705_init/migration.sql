-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imgdata" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "url" TEXT[],
    "size" TEXT[],
    "color" TEXT[],
    "UserCrtid" INTEGER,

    CONSTRAINT "imgdata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "imgdata" ADD CONSTRAINT "imgdata_UserCrtid_fkey" FOREIGN KEY ("UserCrtid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
