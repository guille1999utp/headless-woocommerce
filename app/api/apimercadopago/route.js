import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_SECRET_KEY,
} );

export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const preferenceData = {
      items: [
        {
          title: body.title,
          quantity: Number(body.quantity), 
          unit_price: Number(body.price),
          currency_id: 'COP',
        }
      ],
      back_urls: {
        success: 'https://headless-woocommerce-nu.vercel.app/gracias-por-tu-compra',
        failure: 'https://headless-woocommerce-nu.vercel.app/error-en-tu-compra ',
        pending: 'https://headless-woocommerce-nu.vercel.app/intentalo-mas-tarde ',
      },
      auto_return: 'approved',
      notification_url: 'https://headless-woocommerce-nu.vercel.app/api/webhooks',
      metadata: {
        idComplete: body.idComplete
      }
    };

    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceData });
    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Error creating payment preference:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}


