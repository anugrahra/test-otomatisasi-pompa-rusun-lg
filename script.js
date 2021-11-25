function test() {
  let reservoirA = document.getElementById("reservoirA").value;
  let reservoirB = document.getElementById("reservoirB").value;
  let reservoirC = document.getElementById("reservoirC").value;
  let statusPompa = document.getElementById("statusPompa");
  let alasan = document.getElementById("alasan");

  if (reservoirA == "belum penuh" && reservoirB == "belum penuh" && reservoirC == "belum penuh") {
    statusPompa.innerHTML = "Operasi";
    alasan.innerHTML = "semua reservoir belum penuh";
  } else if (reservoirA == "penuh" && reservoirB == "belum penuh" && reservoirC == "belum penuh") {
    statusPompa.innerHTML = "Operasi";
    alasan.innerHTML = "Reservoir C belum penuh, Reservoir B harus ditransfer";
  } else if (reservoirA == "belum penuh" && reservoirB == "penuh" && reservoirC == "belum penuh") {
    statusPompa.innerHTML = "Operasi";
    alasan.innerHTML = "Reservoir A dan C belum penuh";
  } else if (reservoirA == "belum penuh" && reservoirB == "belum penuh" && reservoirC == "penuh") {
    statusPompa.innerHTML = "Operasi";
    alasan.innerHTML = "Reservoir A belum penuh, Reservoir B harus ditransfer";
  } else if (reservoirA == "penuh" && reservoirB == "penuh" && reservoirC == "belum penuh") {
    statusPompa.innerHTML = "Operasi";
    alasan.innerHTML = "Reservoir C belum penuh";
  } else if (reservoirA == "penuh" && reservoirB == "belum penuh" && reservoirC == "penuh") {
    statusPompa.innerHTML = "Mati";
    alasan.innerHTML = "Reservoir A dan C penuh, Reservoir B harus ditransfer";
  } else if (reservoirA == "belum penuh" && reservoirB == "penuh" && reservoirC == "penuh") {
    statusPompa.innerHTML = "Operasi";
    alasan.innerHTML = "Reservoir A belum penuh";
  } else if (reservoirA == "penuh" && reservoirB == "penuh" && reservoirC == "penuh") {
    statusPompa.innerHTML = "Mati";
    alasan.innerHTML = "Semua reservoir sudah penuh";
  }
}