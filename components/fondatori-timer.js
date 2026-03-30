/**
 * Fondatori Timer
 * Popola tutti gli elementi .fondatori-timer con un countdown live.
 * Quando l'offerta scade, nasconde i blocchi padre .fondatori-offer-block.
 *
 * DATA DI FINE OFFERTA: 2026-04-30T23:59:59
 */

var FONDATORI_END = new Date('2026-04-30T23:59:59');

function initFondatoriTimer() {
  var timers = document.querySelectorAll('.fondatori-timer');
  if (!timers.length) return;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var now  = Date.now();
    var diff = FONDATORI_END.getTime() - now;

    if (diff <= 0) {
      // Offerta scaduta: nascondi tutti i blocchi padre
      document.querySelectorAll('.fondatori-offer-block').forEach(function(el) {
        el.style.display = 'none';
      });
      timers.forEach(function(el) { el.textContent = ''; });
      return;
    }

    var days    = Math.floor(diff / 86400000);
    var hours   = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000)  / 60000);
    var seconds = Math.floor((diff % 60000)    / 1000);

    var text = 'Termina tra: ' + days + 'g ' + pad(hours) + 'h ' + pad(minutes) + 'm ' + pad(seconds) + 's';

    timers.forEach(function(el) { el.textContent = text; });
  }

  tick();
  setInterval(tick, 1000);
}
