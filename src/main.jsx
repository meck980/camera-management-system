import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const cameraGroups = [
  'ITS Toàn Tuyến',
  'NS-DC-BV Hoàng',
  'ETC Đien cat',
  'ETC NSDC',
  'ETC Quýnh mỹ',
  'ETC Quýnh vinh',
  'Test',
  'Rừng tủ',
  'Trực Màn Hình',
  'Camera'
]

const cameras = [
  { id: 1, name: 'PTZ_KM3828_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 01' },
  { id: 2, name: 'PTZ_KM3843_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 02' },
  { id: 3, name: 'PTZ_KM3879_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 03' },
  { id: 4, name: 'PTZ_KM3891_25_NS_DC', status: 'P.T', zone: 'NS-DC', state: 'warning', label: 'Camera 04' },
  { id: 5, name: 'PTZ_KM3907_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 05' },
  { id: 6, name: 'PTZ_KM3924_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 06' },
  { id: 7, name: 'PTZ_KM3952_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 07' },
  { id: 8, name: 'PTZ_KM3968_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 08' },
  { id: 9, name: 'PTZ_KM3991_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 09' },
  { id: 10, name: 'PTZ_KM4012_25_NS_DC', status: 'Chờ', zone: 'NS-DC', state: 'offline', label: 'Camera 10' },
  { id: 11, name: 'PTZ_KM4035_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 11' },
  { id: 12, name: 'PTZ_KM4058_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 12' },
  { id: 13, name: 'PTZ_KM4075_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 13' },
  { id: 14, name: 'PTZ_KM4098_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 14' },
  { id: 15, name: 'PTZ_KM4113_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 15' },
  { id: 16, name: 'PTZ_KM4134_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 16' },
  { id: 17, name: 'PTZ_KM4162_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 17' },
  { id: 18, name: 'PTZ_KM4185_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 18' },
  { id: 19, name: 'PTZ_KM4199_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 19' },
  { id: 20, name: 'PTZ_KM4216_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 20' },
  { id: 21, name: 'PTZ_KM4239_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 21' },
  { id: 22, name: 'PTZ_KM4254_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 22' },
  { id: 23, name: 'PTZ_KM4277_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 23' },
  { id: 24, name: 'PTZ_KM4298_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 24' },
  { id: 25, name: 'PTZ_KM4312_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 25' },
  { id: 26, name: 'PTZ_KM4338_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 26' },
  { id: 27, name: 'PTZ_KM4357_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 27' },
  { id: 28, name: 'PTZ_KM4375_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 28' },
  { id: 29, name: 'PTZ_KM4392_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 29' },
  { id: 30, name: 'PTZ_KM4408_25_NS_DC', status: 'Trực tiếp', zone: 'NS-DC', state: 'online', label: 'Camera 30' }
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="header-title">ITS Toàn Tuyến</div>
          <div className="header-subtitle">Back (Alt + left arrow), hold to see history</div>
        </div>

        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Chế độ xem" defaultValue="" />
        </div>

        <div className="tree-view">
          {cameraGroups.map((group, index) => (
            <div key={group} className={`tree-item ${index === 0 ? 'active' : ''}`}>
              <span className="tree-caret">▾</span>
              <span>{group}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="tabs">
            <button className="tab active">Bản xuất</button>
            <button className="tab">Tìm kiếm</button>
            <button className="tab">Trình quản lý báo động</button>
          </div>

          <div className="topbar-tools">
            <span className="status-text">A. Không còn tải 4:00:12 PM</span>
            <button className="icon-btn">⌁</button>
            <button className="icon-btn">⋮</button>
          </div>
        </header>

        <section className="grid-panel">
          {cameras.map((camera) => (
            <article key={camera.id} className="camera-card">
              <div className="video-screen">
                <div className="video-tag">{camera.label}</div>
                <div className="camera-overlay">
                  <span className="overlay-badge">{camera.status}</span>
                </div>
              </div>

              <div className="camera-info">
                <div className="info-row">
                  <span className={`status-dot ${camera.state}`} />
                  <span className="camera-name">{camera.name}</span>
                </div>
                <div className="info-row lower">
                  <span>{camera.zone}</span>
                  <span>{camera.status}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="timeline-bar">
          <div className="play-controls">
            <button>⏮</button>
            <button>◀</button>
            <button>⏸</button>
            <button>▶</button>
            <button>⏭</button>
          </div>

          <div className="timeline-wrap">
            <span className="time">11:54 PM</span>
            <div className="timeline-track">
              <div className="timeline-range"></div>
              <div className="timeline-head"></div>
            </div>
            <span className="time">11:58 PM</span>
          </div>

          <div className="speed-control">
            <button>2x</button>
          </div>
        </footer>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
