-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "jsonid" JSONB,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imgdata" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "url" TEXT[],
    "size" TEXT[],
    "color" TEXT[],
    "prise" INTEGER NOT NULL,

    CONSTRAINT "imgdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "userlocation" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,
    "jsonorder" JSONB NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
