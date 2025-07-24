# Image Optimization Guide - Tanpa Sharp

Proyek ini menggunakan optimasi gambar bawaan Next.js tanpa perlu menginstal sharp atau dependensi tambahan.

## Konfigurasi yang Sudah Diaktifkan

### 1. next.config.mjs

Sudah dikonfigurasi untuk:

- Format otomatis: WebP dan AVIF
- Ukuran device yang responsif
- Optimasi otomatis untuk gambar lokal

### 2. Component OptimizedImage

File: `src/components/OptimizedImage.jsx`

Component ini menggunakan fitur bawaan Next.js untuk optimasi gambar.

## Cara Penggunaan

### Mengganti Image biasa dengan OptimizedImage

**Sebelum:**

```jsx
import Image from "next/image";

<Image
  src="/images/selamatdatang/pojokatas.webp"
  width={800}
  height={800}
  alt="pojok atas"
  className="w-full h-auto"
/>;
```

**Sesudah:**

```jsx
import OptimizedImage from "@/components/OptimizedImage";

<OptimizedImage
  src="/images/selamatdatang/pojokatas.webp"
  width={800}
  height={800}
  alt="pojok atas"
  className="w-full h-auto"
  quality={75}
/>;
```

### Fitur Tambahan

- **Quality control**: Set quality (default: 75)
- **Responsive sizes**: Gunakan prop `sizes`
- **Priority loading**: Gunakan `priority={true}` untuk gambar di atas fold

### Contoh Penggunaan Lengkap

```jsx
<OptimizedImage
  src="/images/chapter2/pengenalan.jpg"
  width={1920}
  height={1080}
  alt="Pengenalan"
  className="w-full h-auto"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={80}
  priority
/>
```

## Keuntungan Tanpa Sharp

1. **Tidak ada dependensi tambahan**
2. **Build lebih cepat**
3. **Ukuran bundle lebih kecil**
4. **Optimasi otomatis Next.js**
5. **Format modern otomatis (WebP/AVIF)**

## Catatan

- Gambar otomatis dioptimasi saat build time
- Format WebP/AVIF digunakan untuk browser yang mendukung
- Fallback otomatis ke format asli untuk browser lama
