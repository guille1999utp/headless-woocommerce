"use client";
import Image from "next/image";
import { manrope, ubuntu } from "@/ui/fonts";
import { TablaEspecificaciones } from "./TablaEspecificaciones";
import { ProductosWoocommerce } from "@/lib/graphQLRequest";
import AddToCart from "../cart/AddToCart";
import { BtnQty } from "./BtnQty";


export const EspecificacionesMinca = async (scooters) => {

  const datosWoocommerce = await ProductosWoocommerce();
  const dataWoocommercer = datosWoocommerce.products.nodes;
  const item = scooters.scooters.productTypes.nodes[0].products.nodes[0];
  console.log(item);
  const productoEncontrado = datosWoocommerce.products.nodes.find(
    (producto) => producto.databaseId === item.productId,
    );
    console.log(datosWoocommerce);


  return (
    <>
      <div className="EspecificacionesMinca" key={1}>
        <div className="items-center justify-between lg:flex lg:justify-center lg:px-[96px]">
          {/* Scooters */}
          <div className="h-auto w-full flex-row-reverse lg:flex lg:w-1/2">
            <div className="grid h-auto w-full place-items-center lg:ml-4 lg:mr-[50px] lg:flex lg:w-auto">
              <Image
                placeholder="empty"
                alt={item.sliderProductos.nombreProducto}
                className="rounded-[20px] bg-[#F0EEED]"
                src={item.sliderProductos.imagen.mediaItemUrl}
                priority={true}
                width={358}
                height={290}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="mt-[13px] flex items-center justify-evenly lg:mt-0 lg:flex-col lg:justify-between">
              <div>
                <Image
                  placeholder="empty"
                  alt={item.sliderProductos.nombreProducto}
                  className="rounded-[20px] border-2 lg:h-[110px] lg:w-[110px]"
                  src={item.sliderProductos.foto1.mediaItemUrl}
                  priority={true}
                  width={111}
                  height={106}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <Image
                  placeholder="empty"
                  alt={item.sliderProductos.nombreProducto}
                  className="rounded-[20px] border-2 lg:h-[110px] lg:w-[110px]"
                  src={item.sliderProductos.foto2.mediaItemUrl}
                  priority={true}
                  width={111}
                  height={106}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <Image
                  placeholder="empty"
                  alt={item.sliderProductos.nombreProducto}
                  className="rounded-[20px] border-2 lg:h-[110px] lg:w-[110px]"
                  src={item.sliderProductos.foto3.mediaItemUrl}
                  priority={true}
                  width={111}
                  height={106}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Titulo y descripcion */}
            <div className="mt-[7px] flex justify-between p-4">
              <div className="flex flex-col justify-center">
                <h2
                  className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111] antialiased lg:text-[42px] lg:leading-[28px]`}
                >
                  {item.sliderProductos.nombreProducto}
                </h2>
                <p
                  className={`${manrope.className} mb-1 text-[16px] font-semibold uppercase text-[#111111] antialiased lg:mt-4 lg:text-[26px] lg:font-medium`}
                >
                  {item.sliderProductos.subtitulo}
                </p>

                <div className="my-2 flex items-center gap-3 lg:mt-6 lg:gap-4">
                  <div
                    className={`${manrope.className} text-[24px] font-bold text-[#111111] antialiased lg:text-[26px]`}
                  >
                    {item.sliderProductos.precioActual}
                  </div>
                  <div
                    className={`${manrope.className} text-[24px] font-bold text-[#111111] antialiased opacity-50 lg:text-[26px]`}
                  >
                    {item.sliderProductos.precioRebajado}
                  </div>
                  <span className="items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                    <p
                      className={`${manrope.className} whitespace-nowrap text-sm antialiased `}
                    >
                      -15%
                    </p>
                  </span>
                </div>
                <p
                  className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A] antialiased lg:mt-5 lg:w-[342px] lg:text-[16px] lg:leading-[25px]`}
                >
                  {item.sliderProductos.description}
                </p>
                <hr className="mt-5" />
              </div>
              {/* /Scooter/btn-slider-left-pc.png */}
            </div>
            {/* Btn y contador */}
            <div className="contador-btnAddCart flex w-full items-center gap-4 px-4 lg:w-[85%] 2xl:w-[60%]">
              {/* <div>
                <label for="Quantity" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>
              
                <div className="btn-aumentarDisminuir flex h-[44px] w-[100px] items-center gap-1 rounded-[62px] bg-[#F0F0F0]">
                  <button
                    type="button"
                    className="size-10 text-[25px] leading-10 text-gray-600 transition"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    className="h-10 w-2 bg-[#F0F0F0] text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    type="button"
                    className="size-10 text-[25px] leading-10 text-gray-600 transition"
                  >
                    +
                  </button>
                </div>
                
              </div> */}
              <BtnQty/>
              <div className="w-full flex-col justify-center lg:flex">
                {/*   <BotonRelativo
                param="Agregar producto"
                clases="bg-[#111] text-white lg:w-full"
              /> */}
                {/* Mostrar solo un botón de "Agregar al carrito" para el primer producto */}

                {/* Mostrar solo un botón de "Agregar al carrito" para el primer producto */}

                {productoEncontrado ? (
                  <AddToCart
                    key={productoEncontrado.databaseId}
                    producto={productoEncontrado}
                  />
                ) : (
                  <p>No se encontró el producto.</p>
                )}
                {/* <AddToCart producto={dataWoocommercer}/> */}
              </div>
            </div>
          </div>
        </div>
        {/* Tabla de especificaciones */}
        <TablaEspecificaciones scooters={scooters} />
      </div>
    </>
  );
};
