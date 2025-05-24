import AddPresenter from "./add-presenter";

class AddPage {
  constructor() {
    this._presenter = null;
  }

  async render() {
    return `
    <h1>Add Story</h1>

    <section class="add-story">
        <form id="add-story-form">
          <label for="description">Deskripsi</label>
          <textarea id="description" required></textarea>

          <label for="open-camera">Pictures</label>
          <div class="camera-buttons">
            <button type="button" id="open-camera">Open Camera</button>
            <button type="button" id="close-camera">Close Camera</button>
          </div>
          <video id="camera-preview" autoplay playsinline style="display:none; width:100%; max-width:300px;"></video>
          <button type="button" id="take-photo" style="display:none;">Take a picture</button>
          <canvas id="photo-canvas" style="display:none;"></canvas>
          <img id="photo-result" src="" alt="Hasil Foto" style="display:none; width:100%; max-width:300px;" />

          <label for="file-input">Choose File</label>
          <input type="file" id="file-input" class="input-image" accept="image/*" />

          <label>Location</label>
          <div id="map" style="height: 300px;"></div>
          <input type="hidden" id="lat">
          <input type="hidden" id="lon">

          <button type="button" id="use-my-location">My Location</button>
          <button type="submit">Submit</button>
        </form>
      </section>
    `;
  }
  async afterRender() {
    this._presenter = new AddPresenter();
    this._presenter.init();
  }
}

export default AddPage;
