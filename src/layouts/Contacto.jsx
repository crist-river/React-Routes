import { Button } from 'react-bootstrap'
const Contacto = () => {
  return (
    <div className='container'>
      <div className='titulo info'>
        <h1> Cuentanos ¿ En que te podemos ayudar ?</h1>
      </div>
      <div className='mb-3 info'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>Correo </label>
        <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='nombre@ejemplo.com' />
      </div>
      <div className='mb-3 info'>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>Descripcion </label>
        <textarea className='form-control' id='exampleFormControlTextarea1' rows='3'> </textarea>
      </div>
      <div className='info'>
        <Button variant='danger'> Enviar </Button>
      </div>

    </div>

  )
}

export default Contacto
