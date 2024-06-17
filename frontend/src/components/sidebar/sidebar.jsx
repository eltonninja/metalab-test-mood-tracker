import { useRouter } from 'next/router';
import styles from './sidebar.module.css';
import { useMoods } from '@/data-hooks/useMoods';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const MoodPreview = dynamic(() => import('./mood-preview'), {
  ssr: false,
});

export default function Sidebar({ setShowModal, children }) {
  const router = useRouter();
  const { isLoading, data: moodList } = useMoods();

  const updateSelectedMood = (newMood) => {
    router.query.mood = newMood;
    router.push(router);
  };

  return (
    <div className={styles.sidebar} suppressHydrationWarning>
      <div className={styles['sidebar__list']}>
        <div className={styles.scrollable}>
          {isLoading ? (
            <div className={styles['sidebar__empty_entry_container']}>
              <Loader2 size={32} className={`spinner`} />
            </div>
          ) : (
            <>
              {moodList?.length ? (
                moodList.map(({ type, createdAt, _id }) => (
                  <MoodPreview
                    key={`mood-preview-${createdAt}-${type}-${_id}`}
                    mood={type}
                    date={createdAt}
                    updateSelectedMood={updateSelectedMood}
                  />
                ))
              ) : (
                <div className={styles['sidebar__empty_entry_container']}>
                  <p className={styles['sidebar__empty_entry_text']}>
                    No mood entry, share your recent mood with us
                  </p>
                </div>
              )}
              {children}
            </>
          )}
        </div>
      </div>
      <div className={styles['sidebar__footer']}>
        <button
          className={styles['sidebar__add_button']}
          onClick={() => setShowModal((current) => !current)}
        >
          Log Mood
        </button>
      </div>
    </div>
  );
}
