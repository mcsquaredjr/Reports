# Some useful time utility functiond


import datetime

def today():
    '''Return date for today.
    '''
    return datetime.date.today()


def get_week_from_num(year, month, day):
    '''Return week number from year, mon, and day.
    '''
    return datetime.date(year, month, day).isocalendar()[1]


def get_week_from_obj(date_time_obj):
    '''Return week number from datetime object.
    '''
    return date_time_obj.isocalendar()[1]


def this_week():
    '''Return current week'''
    return today().isocalendar()[1]


def now():
    '''Return current date and time as datetime'''
    return datetime.datetime.utcnow()


def to_date(date_time_obj):
    '''Convert date and time generated by now to the format
    used in Reports, i.e. dd/mm/yyyy'''
    return date_time_obj.strftime('%d/%m/%Y')



if __name__ == '__main__':
    # Test functions above
    # today
    print 'Today in Python is: {0}'.format(today())
    print 'Current week is: {0}'.format(this_week())
    print 'Current week is: {0}'.format(get_week_from_obj(today()))
    print 'Now is: {0}'.format(now())    
    print 'Now formatted to date: {0}'.format(to_date(now()))
