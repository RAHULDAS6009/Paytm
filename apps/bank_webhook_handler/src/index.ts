import express from "express";
import db from "@repo/db/client";
import dotenv from 'dotenv'; 
dotenv.config(); 

const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  //TODO: Add zod validation here?
  const paymentInformation: { token: string; userId: string; amount: string } =
    {
      token: req.body.token,
      userId: req.body.user_identifier,
      amount: req.body.amount,
    };
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),

      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.json({
      msg: "Captured",
    });
  } catch (error) {
    res.json(411).json({
      msg: "Error while Processing webhook",
    });
  }

  // await db.$transaction(async (tx) => {
  //   //decrement the amount from the sender,
  //   const sender = await tx.balance.update({
  //     where: {
  //       userId: req.body.userId,
  //     },
  //     data: {
  //       amount: {
  //         decrement: paymentInformation.amount,
  //       },
  //     },
  //   });

  //   //Verfiy the sender balance go did not zero
  //   if (sender.amount < 0) return res.json({ msg: "not captured" });

  //   //increment the recipient's balance by amount
  //   const recipient = tx.balance.update({
  //     where: {
  //       userId: paymentInformation.userId,
  //     },
  //     data: {
  //       amount: {
  //         increment: paymentInformation.amount,
  //       },
  //     },
  //   });
  // });
  // Update balance in db, add txn
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started ${process.env.PORT}`);
});
