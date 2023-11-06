export default function Loader({ className }) {
  return (
    <div className={`spinner-border text-dark mt-1 ${className}`} role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  )
}