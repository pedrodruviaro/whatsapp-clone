import React from 'react'
import '../styles/chat-intro.css'
import imagem from '../assets/chatintro.jpg'

export default function ChatIntro() {
    return (
        <div className="chatIntro">
            <img src={imagem} alt="Celular com logo do whatsapp" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
        </div>
    )
}
