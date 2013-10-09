class Report_Maker(object):
    '''
    Store submitted data and generate good-looking HTML
    '''
    def __init__(self):
        # Keep all submitted reports in array of dicts
        self.data = []

    def add_data(self, new_data):
        '''Append collected data
        '''
        self.data.append(new_data)

    def get_data(self):
        '''Return collected data
        '''
        return self.data

    def data2md(self):
        '''Convert submitted data to markdown'''
        mmd_txt = ''
        for entry in self.data:
            keys = sorted(entry.keys())

            mmd_txt += '## ' + entry['project'] + '\n'
            for key in keys:
                if key != 'project':
                    mmd_txt += '### ' + key + '\n'
                    mmd_txt += entry[key] + '\n'

        return mmd_txt.replace('\n', '\n\n')

