import { Container } from './styles';
import Modal from 'react-modal';
import closeImg from '../../../../assets/close.svg';
import { FormEvent, useState } from 'react';
import { supabase } from '../../../../client';

interface SelectClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SelectClientModal({
  isOpen,
  onRequestClose,
}: SelectClientModalProps) {
  const mask = (v: string) => {
    v = v.replace(/\D/g, '');

    if (v.length <= 11) {
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
      v = v.replace(/^(\d{2})(\d)/, '$1.$2');
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
      v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
      v = v.replace(/(\d{4})(\d)/, '$1-$2');
    }

    return v;
  };

  const [valor, setValor] = useState('');

  function handleChangeMask(event: any) {
    const { value } = event.target;

    setValor(mask(value));
    setCnpj(value);
  }

  const [client, setClient] = useState('');
  const [cnpj, setCnpj] = useState('');

  async function fetchClients(client: any, cnpj: any) {
    let newClient = { nome: client, cnpj: cnpj };

    // console.log(newClient)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data } = await supabase.from('clients').insert([newClient]);
    window.location.reload();
  }

  function handleSelectClient(e: FormEvent) {
    e.preventDefault();
    fetchClients(client, cnpj);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button type='button' onClick={onRequestClose}>
        {' '}
        <img src={closeImg} alt='Fechar Modal' className='react-modal-close' />
      </button>

      <Container onSubmit={handleSelectClient}>
        <h2>Cadastrar Cliente</h2>
        <input
          type='text'
          placeholder='Nome do Cliente'
          value={client}
          onChange={(event) => setClient(event.target.value)}
        />
        <input
          placeholder='00.000.000/0000-00'
          onChange={handleChangeMask}
          value={valor}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
