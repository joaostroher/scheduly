/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { format, addDays, subDays, parseISO, getDate } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { toast } from 'react-toastify';
import { SchedulesDiv, ScheduledsDiv, ScheduledsLi } from './styles';
import api from '~/services/api';
import { setSingScheduleLS } from '~/local/singSchedule';

export default function SchedulesList() {
  const [now] = useState(new Date());
  const [dateSel, setDateSel] = useState(now);
  const [scheduleds, setScheduleds] = useState([]);

  const history = useHistory();

  const dateFmt = useMemo(
    () => format(dateSel, "d 'de' MMMM", { locale: pt }),
    [dateSel]
  );

  useEffect(() => {
    async function loadSchedules() {
      try {
        const schedules = await api.get('schedules', {
          params: { date: dateSel },
        });
        const dateSelCompare = format(dateSel, 'ddMMyyyy');
        const schedulesFiltered = schedules.data.filter(
          schedule =>
            format(parseISO(schedule.date_time_start), 'ddMMyyyy') ===
            dateSelCompare
        );
        setScheduleds(
          schedulesFiltered.map(schedule => ({
            ...schedule,
            time: format(parseISO(schedule.date_time_start), 'hh:mm'),
            passed: parseISO(schedule.date_time_start) < now,
          }))
        );
      } catch (error) {
        toast.error('Falha ao carregar os agendamentos');
      }
    }
    loadSchedules();
    // }, [dateSel, now]);
  }, [dateSel, now]);

  function handleNewSchedule(e, time) {
    e.preventDefault();
    setSingScheduleLS({
      date_time_start: time
        ? parseISO(`${format(dateSel, 'yyyy-MM-dd')} ${time}`)
        : new Date(),
    });
    history.push('/schedules/register');
  }

  function handleEditSchedule(e, schedule) {
    e.preventDefault();
    setSingScheduleLS({
      ...schedule,
      date_time_start: parseISO(schedule.date_time_start),
    });
    history.push('/schedules/register');
  }

  return (
    <SchedulesDiv>
      <div className="divNavDates">
        <MdKeyboardArrowLeft onClick={() => setDateSel(subDays(dateSel, 1))} />
        <strong>{dateFmt}</strong>
        <MdKeyboardArrowRight onClick={() => setDateSel(addDays(dateSel, 1))} />
      </div>

      <div className="divBtnsOptions">
        <button type="submit" onClick={e => handleNewSchedule(e, null)}>
          Novo agendamento
        </button>
      </div>

      <div className="divSelList">
        <ScheduledsDiv>
          <ul>
            {scheduleds.map(schedule => (
              <ScheduledsLi
                key={schedule._id}
                passed={schedule.passed}
                onClick={e => handleEditSchedule(e, schedule)}
              >
                <div className="divShowTime">
                  <strong>{schedule.time}</strong>
                </div>
                <div className="divShowService">
                  <strong className="spanClient">
                    {schedule.customer_id.name}
                  </strong>
                  <span className="spanService">
                    {schedule.service_id.name}
                  </span>
                </div>
              </ScheduledsLi>
            ))}
          </ul>
        </ScheduledsDiv>
      </div>
    </SchedulesDiv>
  );
}
