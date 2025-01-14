import React from 'react';
import './src/components/VideoChat.css';

class VideoChat extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="left-side">
          <div className="video-call-actions ">
            <button className="video-action-button mic"></button>
            <button className="video-action-button camera"></button>
            <button className="video-action-button endcall">Leave</button>
          </div>
        </div>
        <div className="right-side">
          <button className="btn-close-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-x-circle" viewBox="0 0 24 24">
              <defs></defs>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M15 9l-6 6M9 9l6 6"></path>
            </svg>
          </button>
          <div className="chat-container">
            <div className="chat-header">
              <button className="chat-header-button">Live Chat</button>
            </div>
            <div className="chat-area">
              {/* Message wrappers */}
              <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Ryan Patrick</p>
            <div class="message">Helloo team!😍</div>
          </div>
        </div>
         <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Andy Will</p>
            <div class="message">Hello! Can you hear me?🤯 <a class="mention">@ryanpatrick</a></div>
          </div>
        </div>
        <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Jessica Bell</p>
            <div class="message">Hi team! Let's get started it.</div>
          </div>
        </div>
        <div class="message-wrapper reverse">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Emmy Lou</p>
            <div class="message">Good morning!🌈</div>
          </div>
        </div>
         <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Tim Russel</p>
            <div class="message">New design document⬇️</div>
            <div class="message-file">
              <div class="icon sketch">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="#ffd54f" d="M96 191.02v-144l160-30.04 160 30.04v144z"/>
                  <path fill="#ffecb3" d="M96 191.02L256 16.98l160 174.04z"/>
                  <path fill="#ffa000" d="M0 191.02l256 304 256-304z"/>
                  <path fill="#ffca28" d="M96 191.02l160 304 160-304z"/>
                  <g fill="#ffc107">
                    <path d="M0 191.02l96-144v144zM416 47.02v144h96z"/>
                  </g>
                </svg>
              </div>
              <div class="file-info">
                <div class="file-name">NewYear.sketch</div>
                <div class="file-size">120 MB</div>
              </div>
            </div>
          </div>
        </div>
         <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Ryan Patrick</p>
            <div class="message">Hi team!❤️</div>
            <div class="message">I downloaded the file <a class="mention">@timrussel</a></div>
          </div>
        </div>
         <div class="message-wrapper reverse">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="pp"/>
          </div>
          <div class="message-content">
            <p class="name">Emmy Lou</p>
            <div class="message">Woooww! Awesome❤️</div>
          </div>
        </div>
            </div>
            <div className="chat-typing-area-wrapper">
              <div className="chat-typing-area">
                <input type="text" placeholder="Type your message..." className="chat-input" />
                <button className="send-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send" viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoChat;
