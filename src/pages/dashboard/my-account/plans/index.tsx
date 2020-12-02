import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import plansDetails from '../../../../models/data-plans.json';
import NProgress from 'nprogress';
import { toast } from 'react-toastify';
import { Container } from '../../../../styles/pages/Plans';
import { useMount } from '../../../../hooks';
import { Header, PlanCard } from '../../../../components/';
import { ApplicationState } from '../../../../store';
import { actions } from '../../../../store/states/auth';
import { UserState } from '../../../../models/User';
import { useDispatch, useSelector } from 'react-redux';
import { AuthService } from '../../../../services/Auth';

interface planInterface {
  title: string;
  monthPrice: number;
  yearPrice: number;
  features: Feature[];
}

interface Feature {
  name: string;
  checked: boolean;
}

const Plans: React.FC = () => {
  const { authenticated, user } = useSelector<ApplicationState, UserState>(state => state.auth);
  const [plan, setPlan] = useState<number>();
  const dispatch = useDispatch();

  const onSelectPlan = (idPlan: number) => {
    NProgress.start();
    AuthService.changePlan(user._id, idPlan)
      .then(() => {
        getPlans();
      })
      .catch(err => {
        NProgress.done();
        return err;
      });
  };

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  useEffect(() => {
    getPlans();
  }, [user]);

  const getPlans = () => {
    if (authenticated) {
      NProgress.start();
      AuthService.getPlan(user._id)
        .then(({ data }) => {
          NProgress.done();
          setPlan(data.plan);
        })
        .catch(err => {
          NProgress.done();
          toast.error('😥 Parece que houve um problema', {
            autoClose: 4000,
            position: 'top-center',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          return err;
        });
    }
  };

  return authenticated ? (
    <>
      <Head>
        <title>Video</title>
      </Head>
      <Header
        options={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'My Account', link: '/dashboard/my-account' },
        ]}
      />
      <Container>
        {plansDetails.map((item: planInterface, index) => {
          return (
            <PlanCard
              title={item.title}
              monthPrice={'$' + item.monthPrice.toFixed(2)}
              features={item.features}
              key={index}
              onPressButton={() => onSelectPlan(index)}
              owned={plan === index}
            />
          );
        })}
      </Container>
    </>
  ) : (
    <></>
  );
};

export default Plans;
