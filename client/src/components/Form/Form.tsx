import React from 'react'
import {Form as FormBox, Button} from 'react-bootstrap';

const Form = () => {
  return (
      <FormBox>
        <h4>Công thức</h4>
        <FormBox.Group className="mb-3" controlId="formGroupEmail">
          <FormBox.Label>Tên món</FormBox.Label>
          <FormBox.Control type="email" placeholder="Tên món" />
        </FormBox.Group>
        <FormBox.Group className="mb-3" controlId="formGroupPassword">
          <FormBox.Label>Thành phần</FormBox.Label>
          <div className="d-flex">
            <FormBox.Check type="checkbox" label="Thịt" className="ms-4" />
            <FormBox.Check type="checkbox" label="Thịt" className="ms-4" />
            <FormBox.Check type="checkbox" label="Thịt" className="ms-4" />
          </div>
        </FormBox.Group>
         <FormBox.Group className="mb-3" controlId="formGroupPassword">
          <FormBox.Label>Gia vị</FormBox.Label>
          <div className="d-flex">
            <FormBox.Check type="checkbox" label="Đường" className="ms-4" />
            <FormBox.Check type="checkbox" label="Muối" className="ms-4" />
            <FormBox.Check type="checkbox" label="Sữa" className="ms-4" />
          </div>
        </FormBox.Group>
        <FormBox.Group className="mt-5">
          <Button>Thêm công thức</Button>
        </FormBox.Group>
      </FormBox>
  )
}

export default Form