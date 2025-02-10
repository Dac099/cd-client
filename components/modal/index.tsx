'use client';

export const Modal = ({ children }: Readonly<{ children: React.ReactNode}>) => {
  return (
    <article className='fixed top-0 left-0 w-full h-full bg-gray-950 bg-opacity-65 flex justify-center items-center'>
      <article className='bg-slate-50 w-11/12 rounded-md px-1 h-max'>
        {children}
      </article>
    </article>
  );
}