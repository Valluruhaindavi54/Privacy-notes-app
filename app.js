import React, { useEffect, useState } from 'react';
import { encryptNote, decryptNote } from './crypto';
import { addNote, getAllNotes } from './db';

function App() {
  const [notes, setNotes] = useState([]);
    const [text, setText] = useState('');
    
      useEffect(() => {
          fetchNotes();
            }, []);
            
              const fetchNotes = async () => {
                  const saved = await getAllNotes();
                      const decrypted = saved.map(n => ({ ...n, content: decryptNote(n.content) }));
                          setNotes(decrypted);
                            };
                            
                              const handleAdd = async () => {
                                  const encrypted = encryptNote(text);
                                      await addNote(encrypted);
                                          setText('');
                                              fetchNotes();
                                                };
                                                
                                                  return (
                                                      <div style={{ padding: 20 }}>
                                                            <h1>🔐 Secure Notes</h1>
                                                                  <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type note..." />
                                                                        <br/>
                                                                              <button onClick={handleAdd}>Add Note</button>
                                                                                    <ul>
                                                                                            {notes.map((n, idx) => (
                                                                                                      <li key={idx}>{n.content}</li>
                                                                                                              ))}
                                                                                                                    </ul>
                                                                                                                        </div>
                                                                                                                          );
                                                                                                                          }
                                                                                                                          
                                                                                                                          export default App;
                                                                                                                          
