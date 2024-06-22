import { useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if(!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Your data</h3>
            <input className={'input'} type="text" placeholder={'Country'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'City'} value={city} onChange={onChangeCity}/>
            <select className={'select'}>
                <option value={'physical'}>Fiz. face</option>
                <option value={'legal'}>Y. face</option>
            </select>
        </div>
    )
}

export default Form;