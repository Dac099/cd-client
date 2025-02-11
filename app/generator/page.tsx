'use client';
import { useState } from 'react';
import { FaWpforms } from "react-icons/fa6";
import Form from 'next/form';

type BudgetItem = {
  name: string;
  price: number | string;
};

export default function Page() {
  const [ isService, setIsService ] = useState<boolean>(false);
  const [ budgetItems, setBudgetItems ] = useState<BudgetItem[]>([]);

  const handleAddItem = () => {
    setBudgetItems([
      ...budgetItems,
      {
        name: '',
        price: 0
      }
    ]);
  };

  const handleUpdateItemPrice = (index: number, value: string | number) => {
    const copyItems = [...budgetItems];
    const itemToUpdate = copyItems[index];
    
    copyItems.splice(index, 1, {
      name: itemToUpdate.name,
      price: value
    });
    setBudgetItems(copyItems);
  };

  const handleUpdateItemTitle = (index: number, key: string) => {
    const copyItems = [...budgetItems];
    const itemToUpdate = copyItems[index];
    
    copyItems.splice(index, 1, {
      name: key,
      price: itemToUpdate.price
    });
    setBudgetItems(copyItems);
  };

  return (
    <article className='mb-12 overflow-y-auto overflow-x-hidden'>
      <section className='p-2 flex justify-between items-center bg-zinc-900 text-zinc-50'>
        <h1 className='text-xl font-bold'>Generador</h1>
        <FaWpforms className='' size={25}/>
      </section>

      <Form>
        <section className='h-max p-2 my-4 mx-2 border-2 border-zinc-400 rounded-md'>
          <p className='text-lg font-semibold border-b-2 border-b-zinc-300'>Cliente</p>

          <article className='my-2'>
            <label htmlFor="ClientName">Nombre</label>
            <input 
              type="text" 
              name="ClientName" 
              id="ClientName" 
              className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
            />
          </article>
          
          <article className='my-2'>
            <label htmlFor="ClientEmail">Correo</label>
            <input 
              type="email" 
              name="ClientEmail" 
              id="ClientEmail" 
              className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
            />
          </article>

          <article className='my-2'>
            <label htmlFor="ClientPhone">Teléfono</label>
            <input 
              type="tel" 
              name="ClientPhone" 
              id="ClientPhone" 
              className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
            />
          </article>

          <article className='my-2'>
            <label htmlFor="ClientCompany">Compañía</label>
            <input 
              type="text" 
              name="ClientCompany" 
              id="ClientCompany" 
              className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
            />
          </article>

          <article className='my-2'>
            <label htmlFor="ClientAddress">Dirección</label>
            <input 
              type="text" 
              name="ClientAddress" 
              id="ClientAddress" 
              className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
            />
          </article>
        </section>

        <section className='h-max p-2 my-4 mx-2 border-2 border-zinc-400 rounded-md'>
          <p className='text-lg font-semibold border-b-2 border-b-zinc-300'>
            {isService ? 'Servicio' : 'Carrocería'}
          </p>
          
          <article className='my-2'>
            <p className='font-semibold'>¿Es servicio o carrocería?</p>
            <section className='flex justify-around'>
              <div className='flex gap-2 items-center'>
                <label htmlFor="service">Servicio</label>
                <input 
                  type="radio" 
                  name="IsService" 
                  id="service" 
                  value={'IsService'}
                  onChange={() => setIsService(true)}
                  defaultChecked={isService}
                />
              </div>
              <div className='flex gap-2 items-center'>
                <label htmlFor="bodywork">Carrocería</label>
                <input 
                  type="radio" 
                  name="IsService" 
                  id="bodywork" 
                  value={'isBodyWork'}
                  onChange={() => setIsService(false)}
                  defaultChecked={!isService}
                />
              </div>
            </section>
          </article>

          <article className='my-2'>
            <label htmlFor="Description" className='block'>Descripción</label>
            <textarea 
              name="Description" 
              id="Description" 
              rows={5}
              className='border-2 w-full resize-none p-2 outline-none rounded-md focus:border-l-4 focus:border-l-indigo-500 focus:rounded-sm'
            ></textarea>
          </article>

          <article className='my-2'>
            <label htmlFor="Price">Precio</label>
            <div className='flex border-2 rounded-md focus:rounded-sm focus:border-b-indigo-500'>
              <input 
                type="number"
                min={0} 
                name="Price" 
                id="Price" 
                className='block w-full h-12 pl-1 outline-none rounded-md'
              />
              <span className='w-12 grid place-content-center text-lg bg-zinc-100'>$</span>
            </div>
          </article>

          <article className='my-2'>
            <label htmlFor="DeliveryDate">Fecha estimada de entrega</label>
            <input 
              type="date" 
              name="DeliveryDate" 
              id="DeliveryDate" 
              className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
            />
          </article>

          {!isService &&            
            (
              <div>
                <section className='grid grid-cols-3 gap-2'>
                  <article className='my-2 relative'>
                    <label htmlFor="Height">Altura</label>
                    <div className='flex border-2 rounded-md focus:rounded-sm focus:border-b-indigo-500'>
                      <input 
                        type="number"
                        min={0} 
                        name="Height" 
                        id="Height" 
                        className='block w-full h-12 pl-1 outline-none rounded-md'
                      />
                      <span className='w-12 grid place-content-center text-lg bg-zinc-100'>cm</span>
                    </div>
                  </article>

                  <article className='my-2'>
                    <label htmlFor="Width">Ancho</label>
                    <div className='flex border-2 rounded-md focus:rounded-sm focus:border-b-indigo-500'>
                      <input 
                        type="number"
                        min={0} 
                        name="Width" 
                        id="Width" 
                        className='block w-full h-12 pl-1 outline-none rounded-md'
                      />
                      <span className='w-12 grid place-content-center text-lg bg-zinc-100'>cm</span>
                    </div>
                  </article>

                  <article className='my-2'>
                    <label htmlFor="Height">Largo</label>
                    <div className='flex border-2 rounded-md focus:rounded-sm focus:border-b-indigo-500'>
                      <input 
                        type="number"
                        min={0} 
                        name="Length" 
                        id="Length" 
                        className='block w-full h-12 pl-1 outline-none rounded-md'
                      />
                      <span className='w-12 grid place-content-center text-lg bg-zinc-100'>cm</span>
                    </div>
                  </article>
                </section>
              </div>
            )
          }

          <article className='my-2'>
            <section className='flex justify-between items-center border-t-2 pt-2 border-t-zinc-400 my-2'>
              <p className='font-semibold'>Desglose de precio</p>
              <button 
                type="button"
                className='border-2 border-zinc-400 py-2 px-3 rounded-md bg-zinc-100 text-zinc-900'
                onClick={handleAddItem}
              >
                Agregar
              </button>
            </section>

            <section className='border-t-2 border-dashed'>
              {
                budgetItems.map((item, index) => (
                  <article 
                    key={index}
                    className='my-2 border-b-2 pb-2 border-dashed'
                  >
                    <div>
                      <label htmlFor={`ItemTitle_${index}`}>Nombre</label>
                      <input 
                        type="text" 
                        name={`ItemTitle_${index}`} 
                        id={`ItemTitle_${index}`} 
                        className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm'
                        onChange={(e) => handleUpdateItemTitle(index, e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor={`ItemPrice_${index}`}>Precio</label>
                      <input 
                        type="number" 
                        name={`ItemPrice_${index}`} 
                        id={`ItemPrice_${index}`} 
                        className='block border-2 w-full h-12 rounded-md pl-1 outline-none focus:border-b-4 focus:border-b-indigo-500 focus:rounded-sm' 
                        onChange={(e) => handleUpdateItemPrice(index, e.target.value)}
                      />
                    </div>
                  </article>
                ))
              }
            </section>
          </article>
        </section>

        <section className='h-max p-2 my-4 mx-2 border-2 border-zinc-400 rounded-md'>
          <button 
            type="submit"
            className='bg-indigo-500 text-zinc-50 py-2 px-3 rounded-md ml-auto block'
          >
            Generar Cotización
          </button>
        </section>
      </Form>
    </article>
  );
}