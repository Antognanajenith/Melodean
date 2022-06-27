import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 


export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("to stripe checkuh",req.body)
    try {
      const stripeparams = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options:[
            {shipping_rate:'shr_1LFJ25SJA8OhKhjipQCxEUYA'},
            {shipping_rate:'shr_1LFIwUSJA8OhKhji9r8HIkLz'},
        ],
        line_items:req.body.map((item)=>{
          
          return{
            price_data:{
              currency:'inr',
              product_data:{
                name:item.name,
                //images:item.Imglnk,
              },
              unit_amount:item.price * 100,
            },
            adjustable_quantity:{
              enabled:true,
              minimum:1,
            } ,
            quantity:item.quantitty,
          };
        })  ,
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      const session = await stripe.checkout.sessions.create(stripeparams);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}