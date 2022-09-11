import { Input, Button, Select, Textarea } from 'react-rainbow-components'
import { useState } from 'react'
import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

const GuideDesignForm = ({
  formValues,
  setFormValues,
  selectedEdit,
  toggleForm,
  setFormToggle,
  selectedRecord
}) => {
  const casOptions = [
    { value: 'SpCas9', label: 'SpCas9' },
    { value: 'SaCas9', label: 'SaCas9' },
    { value: 'Cas12a', label: 'Cas12a (Cpf1)' }
  ]
  const strandOptions = [
    { value: '+', label: 'forward' },
    { value: '-', label: 'reverse' }
  ]

  const validSeq = (seq) => {
    seq.split('')
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    console.log(selectedRecord)

    await axios
      .put(`${URL}/guides/${selectedRecord}`, formValues)
      .catch((error) => console.log(error))
    alert('updated')
  }

  return (
    <div>
      <h2>Editing Guide # {selectedRecord}</h2>
      <form className="DesignForm">
        <Input
          onChange={handleChange}
          value={formValues.gene}
          name="gene"
          label="Gene Target"
          type="text"
          placeholder="gene target"
        />
        <Input
          onChange={handleChange}
          value={formValues.efficiency}
          name="efficiency"
          label="Efficiency"
          type="float"
          placeholder="efficiency"
        />
        <Select
          onChange={handleChange}
          name="cas"
          label="Cas"
          placeholder={casOptions[0].value}
          options={casOptions}
        />
        <Select
          onChange={handleChange}
          name="strand"
          label="Strand"
          placeholder={strandOptions[0].value}
          options={strandOptions}
          required
        />
        <Textarea
          onChange={handleChange}
          name="sequence"
          label="Design Sequence"
          value={formValues.sequence}
          required
        />
        <button
          disabled={!formValues.cas || !formValues.sequence}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <button onClick={() => setFormToggle(false)}>Clear form</button>
    </div>
  )
}

export default GuideDesignForm
