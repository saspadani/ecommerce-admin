import { format } from 'date-fns';

import prismadb from '@/lib/prismadb';

import { ColorClient } from './components/client';
import { ColorColumn } from './components/columns';

const ColorPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createAt: 'desc',
    },
  });

  const formatedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createAt: format(item.createAt, 'dd/MM/yyyy'),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <ColorClient data={formatedColors} />
      </div>
    </div>
  );
};

export default ColorPage;
