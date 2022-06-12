export const VisualComponent = ({ title = 'Component', children }) => {
  return (
    // <div className='component bg-gray-900 rounded text-white p-4 border-2 border-gray-400 relative mt-4'>
    <div className='component bg-gray-900 rounded text-white p-4 border-2 border-gray-400 relative mt-4'>
      <span
        key={Math.random()}
        className='rerender absolute left-4 top-2 text-xs uppercase font-bold text-red-500'
      >
        Render
      </span>
      <h2 className='mt-2 font-bold text-lg mb-4'>{title}</h2>
      {children}
    </div>
  );
};

export const Button = (props) => {
  return (
    <button
      className='px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm'
      {...props}
    />
  );
};

export const LabeledBox = ({ label, children }) => {
  return (
    <div>
      <div>{label}</div>
      {children}
    </div>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className='p-6 bg-gray-800 min-h-screen text-white'>
      <div className='max-w-2xl mx-auto'>{children}</div>
    </div>
  );
};

export const Props = (props) => {
  return (
    <div className="p-3 absolute bg-gray-100 text-xs text-black -top-5 right-5">props = {JSON.stringify(props)}</div>
  )
}
