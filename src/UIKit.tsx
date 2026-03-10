// src/UIKit.tsx
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 transition-colors uikit-container">
      <div className="max-w-5xl mx-auto space-y-24 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 border-b border-white/10 pb-6 text-center">
          UI Kit
        </h1>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold border-b border-white/5 pb-2 dark:text-white">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section className="space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white">Inputs</h2>
          <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
          <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
          <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">Gölge efektli kart.</Card>
            <Card variant="outlined" title="Outlined Card">Çerçeveli kart.</Card>
            <Card variant="filled" title="Filled Card">Dolgulu kart.</Card>
          </div>
        </section>

        <section className="space-y-4 max-w-xl">
          <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white">Alerts</h2>
          <Alert variant="success" title="Başarılı">İşlem tamamlandı.</Alert>
          <Alert variant="error" title="Hata" dismissible>Bir sorun oluştu.</Alert>
        </section>
      </div>
    </div>
  );
}