// =============================================
// TASK C: Smart Search - Real-time Filtering
// =============================================
document.getElementById('speakerSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.speaker-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const name  = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const topic = card.querySelectorAll('p')[1]?.textContent.toLowerCase() || '';
    const role  = card.querySelectorAll('p')[0]?.textContent.toLowerCase() || '';

    const matches = name.includes(query) || topic.includes(query) || role.includes(query);
    card.style.display = matches ? '' : 'none';
    if (matches) visibleCount++;
  });

  // Show "no results" message
  let noResult = document.getElementById('no-results');
  if (!noResult) {
    noResult = document.createElement('p');
    noResult.id = 'no-results';
    noResult.style.cssText = 'color:#aaa; text-align:center; width:100%; padding:20px;';
    noResult.textContent = 'No speakers found. Try a different search!';
    document.querySelector('.speakers-container').appendChild(noResult);
  }
  noResult.style.display = visibleCount === 0 ? 'block' : 'none';
});

// =============================================
// TASK A: My Schedule - localStorage Bookmarks
// =============================================
function toggleBookmark(btn) {
  const name  = btn.dataset.name;
  const topic = btn.dataset.topic;
  const role  = btn.dataset.role;

  let saved = JSON.parse(localStorage.getItem('mySchedule')) || [];
  const exists = saved.find(s => s.name === name);

  if (exists) {
    saved = saved.filter(s => s.name !== name);
    btn.textContent = '☆ Save to My Schedule';
    btn.classList.remove('bookmarked');
  } else {
    saved.push({ name, topic, role });
    btn.textContent = '★ Saved!';
    btn.classList.add('bookmarked');
  }

  localStorage.setItem('mySchedule', JSON.stringify(saved));
  renderSchedule();
}

function renderSchedule() {
  const saved = JSON.parse(localStorage.getItem('mySchedule')) || [];
  const list  = document.getElementById('saved-list');
  const count = document.getElementById('saved-count');
  count.textContent = saved.length;

  if (saved.length === 0) {
    list.innerHTML = '<p style="color:#aaa;">No sessions saved yet.</p>';
    return;
  }

  list.innerHTML = saved.map(s => `
    <div class="saved-item">
      <strong>${s.name}</strong>
      <span>${s.topic}</span>
    </div>
  `).join('');
}

// On page load: restore bookmarks from localStorage
window.addEventListener('load', () => {
  const saved = JSON.parse(localStorage.getItem('mySchedule')) || [];
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    if (saved.find(s => s.name === btn.dataset.name)) {
      btn.textContent = '★ Saved!';
      btn.classList.add('bookmarked');
    }
  });
  renderSchedule();
});