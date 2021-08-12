import React, { useState, useMemo, useEffect } from 'react';
import DialogPageHeader from '../components/DialogPageHeader';
import Dialog from '../components/Dialog';
import DialogPageFooter from '../components/DialogPageFooter';
import list from '../utils/api';
import getCombination from "../utils/getCombination";

const DialogPage = ({ match }) => {
    const { id } = match.params;
    const memorizedRecipient = useMemo(() => list[id], [id]);

    const [messages, setMessages] = useState([
        { key: 0, text: memorizedRecipient.lastMsg, date: memorizedRecipient.date}
    ]);

    const onSendMessageHandler = (text, date, isMe) => {
        if (text && date) {
            setMessages(messages => [ ...messages, {
                key: messages.length,
                text,
                date,
                isMe,
            }]);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const message = getCombination();
            onSendMessageHandler(message.phrase, message.timing, false);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <DialogPageHeader
                fullName={memorizedRecipient.fullName}
                date={memorizedRecipient.date}
            />
            <Dialog messages={messages} />
            <DialogPageFooter onSendMessage={onSendMessageHandler} />
        </>
    );
}

export default DialogPage;