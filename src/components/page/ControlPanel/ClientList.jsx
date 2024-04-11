
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientCard from './ClientCard';
import Popup from './Popup';
import ContactForm from './ContactForm';
import Search from './Search';

const ControlPanel = () => {
  const [popup, setPopup] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [ClinetContact, setClinetContact] = useState(false);
  const [Clintmail, setClintmail] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const addpopup = (client) => {
    setPopup(true);
    setSelectedClient(client);
  };

  const closepopup = () => {
    setPopup(false);
    setSelectedClient(null);
  };

  const conatctClinet = (client) => {
    setClinetContact(true);
    setClintmail(client);
  };

  const conatctClinetclose = () => {
    setClinetContact(false);
    setClintmail(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/api/EndClient/getEndClient');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
     
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <div className="flex flex-wrap justify-center gap-10 mt-5 mb-8 ml-18 mr-18 ">
        {filteredClients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onMoreInfoClick={addpopup}
            onContactClick={conatctClinet}
          />
        ))}
      </div>

      {popup && selectedClient && (
        <Popup
          client={selectedClient}
          onCloseClick={closepopup}
          onContactClick={conatctClinet}
        />
      )}

      {ClinetContact && Clintmail && (
        <ContactForm
          client={Clintmail}
          onCloseClick={conatctClinetclose}
          onSubmit={(data) => {
            // Handle form submission here
            console.log('Form submitted:', data);
          }}
        />
      )}
    </div>
  );
};

export default ControlPanel;
