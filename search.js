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

