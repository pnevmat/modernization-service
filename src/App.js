import {useState} from 'react';
import TableComponent from './components/TableComponent/TableComponent';
import DetailsComponent from './components/DetailsComponent/DetailsComponent';
import PaymentComponent from './components/PaymentComponent/PaymentComponent';
import defaultImage from './images/default-image.png';
import './App.css';

function App() {
  const [projectDetails, setProjectDetails] = useState(null);
  const [paymentClick, setPaymentClick] = useState(false);

  const projects = [
    {id: 'dhg', name: 'Назва проекту', photo: defaultImage},
    {id: 'jyg', name: 'Назва проекту', photo: defaultImage},
    {id: 'wpe', name: 'Назва проекту', photo: defaultImage},
    {id: '34i', name: 'Назва проекту', photo: defaultImage},
    {id: 'xct', name: 'Назва проекту', photo: defaultImage},
  ];

  const details = [
    {
      id: 'dhg',
      name: 'Назва проекту',
      description: 'Опис проекту',
      stages: [
        {id: 'wee', name: 'Назва етапу', photo: defaultImage},
        {id: 'rfg', name: 'Назва етапу', photo: defaultImage},
        {id: 'efrg', name: 'Назва етапу', photo: defaultImage},
        {id: 'i8i', name: 'Назва етапу', photo: defaultImage},
      ],
    },
    {
      id: 'jyg',
      name: 'Назва проекту',
      description: 'Опис проекту',
      stages: [
        {id: 'wee', name: 'Назва етапу', photo: defaultImage},
        {id: 'rfg', name: 'Назва етапу', photo: defaultImage},
        {id: 'efrg', name: 'Назва етапу', photo: defaultImage},
        {id: 'i8i', name: 'Назва етапу', photo: defaultImage},
      ],
    },
    {
      id: 'wpe',
      name: 'Назва проекту',
      description: 'Опис проекту',
      stages: [
        {id: 'wee', name: 'Назва етапу', photo: defaultImage},
        {id: 'rfg', name: 'Назва етапу', photo: defaultImage},
        {id: 'efrg', name: 'Назва етапу', photo: defaultImage},
        {id: 'i8i', name: 'Назва етапу', photo: defaultImage},
      ],
    },
    {
      id: '34i',
      name: 'Назва проекту',
      description: 'Опис проекту',
      stages: [
        {id: 'wee', name: 'Назва етапу', photo: defaultImage},
        {id: 'rfg', name: 'Назва етапу', photo: defaultImage},
        {id: 'efrg', name: 'Назва етапу', photo: defaultImage},
        {id: 'i8i', name: 'Назва етапу', photo: defaultImage},
      ],
    },
    {
      id: 'xct',
      name: 'Назва проекту',
      description: 'Опис проекту',
      stages: [
        {id: 'wee', name: 'Назва етапу', photo: defaultImage},
        {id: 'rfg', name: 'Назва етапу', photo: defaultImage},
        {id: 'efrg', name: 'Назва етапу', photo: defaultImage},
        {id: 'i8i', name: 'Назва етапу', photo: defaultImage},
      ],
    },
  ];

  return (
    <div className="container">
      {!projectDetails ? (
        <TableComponent data={projects} setProjectDetails={setProjectDetails} />
      ) : !paymentClick ? (
        <DetailsComponent
          component={projectDetails}
          details={details}
          setProjectDetails={setProjectDetails}
          setPaymentClick={setPaymentClick}
        />
      ) : (
        <PaymentComponent />
      )}
    </div>
  );
}

export default App;
